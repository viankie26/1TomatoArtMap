# 1TomatoMap

[![Repository](https://img.shields.io/badge/GitHub-1TomatoMap-24292f?logo=github)](https://github.com/viankie26/1TomatoMap)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

1TomatoMap is an independent open-source map poster studio for building clean, customizable city map posters in the browser.

Repository: [viankie26/1TomatoMap](https://github.com/viankie26/1TomatoMap)

## Project Origin

This project is modified from [Terraink](https://github.com/yousifamanuel/terraink).

Terraink is a JavaScript reimplementation inspired by the original [MapToPoster](https://github.com/originalankur/maptoposter) by [Ankur Gupta](https://github.com/originalankur), and both upstream projects are published under the MIT License.

1TomatoMap keeps that upstream acknowledgement chain and preserves the original MIT licensing terms while using its own project name and branding.

## Features

- Custom city map posters for any location in the world, powered by real OpenStreetMap data
- Smart geocoding with place search, coordinate entry, and current-location support
- Rich theme system with curated presets and custom color editing
- Detailed map layers including roads, water, parks, rail, and buildings
- Bilingual interface with explicit English and Simplified Chinese switching
- Typography controls with curated Latin fonts plus Source Han Sans and Source Han Serif variants
- High-resolution export for print-ready posters

## Data Providers and Mapping Stack

- Map data: [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)
- Tiles: [OpenMapTiles](https://openmaptiles.org/)
- Tile hosting: [OpenFreeMap](https://openfreemap.org/)
- Geocoding: [Nominatim](https://nominatim.openstreetmap.org/)
- Map renderer: [MapLibre](https://maplibre.org/)

## Run

```bash
git clone https://github.com/viankie26/1TomatoMap.git
cd 1TomatoMap
bun install
bun run dev
```

## Environment

Check [`.env.example`](./.env.example) for available variables. They are optional for most local work and should not be set during testing unless a specific case requires them.

## Build

```bash
bun run build
```

## Deploy with Docker

### Build and run with Docker Compose

```bash
docker compose up -d --build
```

The app serves on `http://localhost:7200` by default. Change `APP_PORT` in `.env` if needed.

### Stop the deployment

```bash
docker compose down
```

### Build and run without Compose

```bash
docker build -t 1tomatomap:latest .
docker run -d --name 1tomatomap -p 7200:80 --restart unless-stopped 1tomatomap:latest
```

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

## Upstream Trademark Notice

This project is based on Terraink, but it is not the official Terraink project and it does not reuse the Terraink or TerraInk names as its own brand. See [TRADEMARK.md](./TRADEMARK.md) for the upstream trademark notice.
