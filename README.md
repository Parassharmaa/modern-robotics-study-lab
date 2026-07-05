# Modern Robotics Study Lab

Interactive study companion for *Modern Robotics* by Lynch and Park.

The app is a single static site with chapter switching. Current coverage:

- Chapter 1: Preview
- Chapter 2: Configuration Space

Local development:

```bash
python3 -m http.server 8765
```

Then open `http://127.0.0.1:8765/index.html`.

Deployment:

- Cloudflare Pages project: `modern-robotics-study-lab`
- Pages URL: `https://modern-robotics-study-lab.pages.dev`
- Intended custom domain: `mr.paraz.in`

The source PDF is used as a local reference and is not committed or deployed.
