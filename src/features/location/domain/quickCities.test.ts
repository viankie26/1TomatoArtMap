import { describe, expect, it } from "vitest";
import {
  getQuickCityGroups,
  mapQuickCityToSearchResult,
} from "@/features/location/domain/quickCities";

describe("quickCities", () => {
  it("returns one localized major city navigator group for English and Chinese", () => {
    const englishGroups = getQuickCityGroups("en");
    const chineseGroups = getQuickCityGroups("zh-CN");

    expect(englishGroups.map((group) => group.label)).toEqual([
      "Major City Navigator",
    ]);
    expect(chineseGroups.map((group) => group.label)).toEqual([
      "主要城市导航",
    ]);

    expect(englishGroups[0]?.cities.some((city) => city.label === "Tokyo")).toBe(
      true,
    );
    expect(chineseGroups[0]?.cities.some((city) => city.label === "东京")).toBe(
      true,
    );
    expect(chineseGroups[0]?.cities.some((city) => city.label === "杭州")).toBe(
      true,
    );
  });

  it("maps a curated quick city to a SearchResult-compatible object", () => {
    const globalGroups = getQuickCityGroups("zh-CN");
    const tokyo = globalGroups[0]?.cities.find((city) => city.id === "tokyo");

    expect(tokyo).toBeDefined();
    expect(mapQuickCityToSearchResult(tokyo!)).toEqual({
      id: "quick-city:tokyo",
      label: "东京，日本",
      city: "东京",
      country: "日本",
      continent: "亚洲",
      lat: 35.6762,
      lon: 139.6503,
      preserveDisplayNames: true,
      preserveLocationLabel: true,
    });
  });
});
