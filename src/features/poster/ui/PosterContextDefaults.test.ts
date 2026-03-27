import { describe, expect, it } from "vitest";
import { DEFAULT_FORM } from "@/features/poster/ui/PosterContext";

describe("DEFAULT_FORM", () => {
  it("uses Shanghai as the default poster location", () => {
    expect(DEFAULT_FORM.location).toBe("上海市，中国");
    expect(DEFAULT_FORM.displayCity).toBe("上海市");
    expect(DEFAULT_FORM.displayCountry).toBe("中国");
    expect(DEFAULT_FORM.displayContinent).toBe("亚洲");
    expect(DEFAULT_FORM.latitude).toBe("31.230400");
    expect(DEFAULT_FORM.longitude).toBe("121.473700");
  });
});
