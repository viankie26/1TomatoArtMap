import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LocaleProvider } from "@/core/i18n/LocaleContext";
import { PosterProvider } from "@/features/poster/ui/PosterContext";
import StartupLocationModal from "@/features/location/ui/StartupLocationModal";

vi.mock("@/features/map/application/useGeolocation", () => ({
  useGeolocation: vi.fn(),
}));

vi.mock("@/features/markers/infrastructure/customIconStorage", () => ({
  loadCustomMarkerIcons: vi.fn().mockResolvedValue([]),
  saveCustomMarkerIcons: vi.fn().mockResolvedValue(undefined),
}));

const originalLocalStorage = window.localStorage;

function renderStartupModal() {
  return render(
    <LocaleProvider>
      <PosterProvider>
        <StartupLocationModal />
      </PosterProvider>
    </LocaleProvider>,
  );
}

describe("StartupLocationModal", () => {
  beforeEach(() => {
    const store = new Map<string, string>();
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      value: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => {
          store.set(key, value);
        },
        removeItem: (key: string) => {
          store.delete(key);
        },
        clear: () => {
          store.clear();
        },
      },
    });
  });

  afterEach(() => {
    cleanup();
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      value: originalLocalStorage,
    });
  });

  it("renders the quick global cities picker between geolocation and confirm actions", async () => {
    const user = userEvent.setup();

    renderStartupModal();

    const geolocationButton = screen.getByRole("button", {
      name: "Get my location",
    });
    const quickCitiesTrigger = screen.getByRole("button", {
      name: "Major City Navigator",
    });
    const confirmButton = screen.getByRole("button", { name: "OK" });

    expect(
      geolocationButton.compareDocumentPosition(quickCitiesTrigger) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      quickCitiesTrigger.compareDocumentPosition(confirmButton) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    expect(
      screen.queryByRole("button", { name: "Tokyo" }),
    ).not.toBeInTheDocument();

    await user.click(quickCitiesTrigger);

    expect(screen.getAllByText("Major City Navigator").length).toBeGreaterThan(0);
    expect(screen.getByRole("button", { name: "Tokyo" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Hangzhou" })).toBeInTheDocument();
  });
});
