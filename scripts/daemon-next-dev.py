#!/usr/bin/env python3
"""daemon-next-dev.py — start `next dev -p 3000` sebagai daemon double-fork
agar tetap hidup setelah sesi bash berakhir. Usage: python3 scripts/daemon-next-dev.py"""
import os
import sys
import time
import subprocess

ROOT = "/home/z/my-project"
LOG = os.path.join(ROOT, "dev.log")


def daemonize():
    if os.fork() > 0:
        sys.exit(0)
    os.setsid()
    if os.fork() > 0:
        sys.exit(0)
    sys.stdout.flush()
    sys.stderr.flush()
    log = open(LOG, "ab", buffering=0)
    os.dup2(log.fileno(), 1)
    os.dup2(log.fileno(), 2)
    devnull = os.open(os.devnull, os.O_RDONLY)
    os.dup2(devnull, 0)


def main():
    daemonize()
    os.chdir(ROOT)
    # beri waktu proses lama benar-benar mati
    time.sleep(2)
    subprocess.run(["npx", "next", "dev", "-p", "3000"], cwd=ROOT)


if __name__ == "__main__":
    main()
