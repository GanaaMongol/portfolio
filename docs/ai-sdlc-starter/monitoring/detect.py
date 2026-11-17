"""Deterministic band detection. Prints GitHub step outputs: tier, metric, sigma, evidence, tools.
No model is involved here — this script decides IF Claude is called and with WHICH tools."""
import os, sys, statistics, yaml, requests

def series(q, window):
    r = requests.get(f"{os.environ['PROM_URL']}/api/v1/query", params={"query": f"({q})[{window}:1h]"}, timeout=30)
    return [float(v) for _, v in r.json()["data"]["result"][0]["values"]]

def western_electric(xs, mu, sd):
    last = xs[-1]
    if abs(last - mu) > 3 * sd: return 3                               # rule 1
    if sum(abs(x - mu) > 2 * sd for x in xs[-3:]) >= 2: return 2         # rule 2
    if sum(abs(x - mu) > sd for x in xs[-5:]) >= 4: return 2             # rule 3 (drift)
    if abs(last - mu) > sd: return 1
    return 0

worst = None
for band in yaml.safe_load(open(sys.argv[1])):
    days = band["baseline"].split("_")[1]
    xs = series(band["query"], days)
    mu, sd = statistics.mean(xs[:-6]), statistics.pstdev(xs[:-6]) or 1e-9
    s = western_electric(xs, mu, sd)
    if s and (worst is None or s > worst[0]):
        worst = (s, band, xs[-1], mu, sd)

if worst:
    s, band, last, mu, sd = worst
    tier = band["tiers"][f"{s}sigma"]
    print(f"tier={tier['action']}\nmetric={band['metric']}\nsigma={s}")
    print(f"evidence=last={last:.4f} mean={mu:.4f} sd={sd:.4f}")
    print(f"tools={tier.get('tools', '')}")
