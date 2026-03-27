# 1TomatoMap

[![Repository](https://img.shields.io/badge/GitHub-1TomatoMap-24292f?logo=github)](https://github.com/viankie26/1TomatoMap)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

1TomatoMap is an independent open-source map poster studio for building clean, customizable city map posters in the browser.

1TomatoMap 是一个独立开源的地图海报工作室，专注于在浏览器中生成简洁、可定制的城市地图海报。

Repository: [viankie26/1TomatoMap](https://github.com/viankie26/1TomatoMap)

仓库地址：[viankie26/1TomatoMap](https://github.com/viankie26/1TomatoMap)

## Project Origin / 项目来源

This project is modified from [Terraink](https://github.com/yousifamanuel/terraink).

这个项目基于 [Terraink](https://github.com/yousifamanuel/terraink) 修改而来。

Terraink is a JavaScript reimplementation inspired by the original [MapToPoster](https://github.com/originalankur/maptoposter) by [Ankur Gupta](https://github.com/originalankur), and both upstream projects are published under the MIT License.

Terraink 是对 [Ankur Gupta](https://github.com/originalankur) 原始项目 [MapToPoster](https://github.com/originalankur/maptoposter) 的 JavaScript 重实现，上游两个项目都基于 MIT License 发布。

1TomatoMap keeps that upstream acknowledgement chain and preserves the original MIT licensing terms while using its own project name and branding.

1TomatoMap 保留了这条上游致谢链路，也继续遵守原始 MIT License，同时使用自己的项目名称和品牌标识。

## Features / 功能特性

- Custom city map posters for any location in the world, powered by real OpenStreetMap data / 基于真实 OpenStreetMap 数据生成全球任意地点的城市地图海报
- Smart geocoding with place search, coordinate entry, and current-location support / 支持地点搜索、坐标输入和当前位置定位的智能地理编码
- Rich theme system with curated presets and custom color editing / 提供丰富主题预设和自定义配色能力
- Detailed map layers including roads, water, parks, rail, and buildings / 提供道路、水域、公园、铁路和建筑等详细地图图层
- Bilingual interface with explicit English and Simplified Chinese switching / 支持英文与简体中文显式切换的双语界面
- Typography controls with curated Latin fonts plus Source Han Sans and Source Han Serif variants / 提供精选西文字体以及思源黑体、思源宋体完整字重选择
- High-resolution export for print-ready posters / 支持适合打印输出的高分辨率导出

## Data Providers and Mapping Stack / 数据来源与地图技术栈

- Map data / 地图数据：[OpenStreetMap contributors](https://www.openstreetmap.org/copyright)
- Tiles / 瓦片服务：[OpenMapTiles](https://openmaptiles.org/)
- Tile hosting / 瓦片托管：[OpenFreeMap](https://openfreemap.org/)
- Geocoding / 地理编码：[Nominatim](https://nominatim.openstreetmap.org/)
- Map renderer / 地图渲染：[MapLibre](https://maplibre.org/)

## Run / 运行方式

```bash
git clone https://github.com/viankie26/1TomatoMap.git
cd 1TomatoMap
bun install
bun run dev
```

## Environment / 环境变量

Check [`.env.example`](./.env.example) for available variables. They are optional for most local work and should not be set during testing unless a specific case requires them.

可用环境变量请参考 [`.env.example`](./.env.example)。大多数本地开发场景并不需要配置；除非测试场景明确要求，否则不建议随意设置。

## Build / 构建

```bash
bun run build
```

## Deploy with Docker / 使用 Docker 部署

### Build and run with Docker Compose / 使用 Docker Compose 构建并运行

```bash
docker compose up -d --build
```

The app serves on `http://localhost:7200` by default. Change `APP_PORT` in `.env` if needed.

应用默认运行在 `http://localhost:7200`。如果需要修改端口，请在 `.env` 中调整 `APP_PORT`。

### Stop the deployment / 停止部署

```bash
docker compose down
```

### Build and run without Compose / 不使用 Compose 直接构建和运行

```bash
docker build -t 1tomatomap:latest .
docker run -d --name 1tomatomap -p 7200:80 --restart unless-stopped 1tomatomap:latest
```

## Contributing / 贡献说明

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

提交 PR 之前，请先阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## License / 许可证

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

本项目采用 MIT License。详情见 [LICENSE](./LICENSE)。

## Upstream Trademark Notice / 上游商标说明

This project is based on Terraink, but it is not the official Terraink project and it does not reuse the Terraink or TerraInk names as its own brand. See [TRADEMARK.md](./TRADEMARK.md) for the upstream trademark notice.

本项目基于 Terraink，但并不是 Terraink 官方项目，也不会将 Terraink 或 TerraInk 作为自己的品牌名称使用。上游商标说明见 [TRADEMARK.md](./TRADEMARK.md)。
