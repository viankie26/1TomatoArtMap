import { describe, expect, it } from "vitest";
import { posterReducer, type PosterState } from "@/features/poster/application/posterReducer";

const baseState: PosterState = {
  form: {
    location: "上海市，中国",
    latitude: "31.230400",
    longitude: "121.473700",
    distance: "5000",
    width: "21",
    height: "29.7",
    theme: "midnight-blue",
    layout: "a4-portrait",
    displayCity: "上海市",
    displayCountry: "中国",
    displayContinent: "亚洲",
    fontFamily: "Source Han Serif SC",
    fontVariant: "heavy",
    showPosterText: true,
    includeCredits: true,
    includeBuildings: false,
    includeWater: true,
    includeParks: true,
    includeAeroway: true,
    includeRail: true,
    includeRoads: true,
    includeRoadPath: true,
    includeRoadMinorLow: true,
    includeRoadOutline: true,
    showMarkers: true,
  },
  customColors: {},
  markers: [],
  customMarkerIcons: [],
  markerDefaults: {
    size: 20,
    color: "#ffffff",
  },
  isMarkerEditorActive: false,
  activeMarkerId: null,
  error: "",
  isExporting: false,
  isLocationFocused: false,
  selectedLocation: null,
  userLocation: null,
  displayNameOverrides: {
    location: false,
    city: false,
    country: false,
  },
};

describe("posterReducer", () => {
  it("locks location and display names when selecting a curated quick city", () => {
    const nextState = posterReducer(baseState, {
      type: "SELECT_LOCATION",
      location: {
        id: "quick-city:shenzhen",
        label: "深圳，中国",
        city: "深圳",
        country: "中国",
        continent: "亚洲",
        lat: 22.5431,
        lon: 114.0579,
        preserveDisplayNames: true,
        preserveLocationLabel: true,
      },
    });

    expect(nextState.form.location).toBe("深圳，中国");
    expect(nextState.form.displayCity).toBe("深圳");
    expect(nextState.form.displayCountry).toBe("中国");
    expect(nextState.displayNameOverrides).toEqual({
      location: true,
      city: true,
      country: true,
    });
  });
});
