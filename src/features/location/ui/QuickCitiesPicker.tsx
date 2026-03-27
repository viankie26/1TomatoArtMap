import { useMemo, useState } from "react";
import { useLocale } from "@/core/i18n/LocaleContext";
import type { SearchResult } from "@/features/location/domain/types";
import {
  getQuickCityGroups,
  mapQuickCityToSearchResult,
} from "@/features/location/domain/quickCities";

interface QuickCitiesPickerProps {
  onSelect: (suggestion: SearchResult) => void;
}

export default function QuickCitiesPicker({ onSelect }: QuickCitiesPickerProps) {
  const { locale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const quickCityGroups = useMemo(() => getQuickCityGroups(locale), [locale]);

  if (quickCityGroups.length === 0) {
    return null;
  }

  return (
    <div className="location-quick-cities">
      <button
        type="button"
        className={`location-quick-cities__trigger${isOpen ? " is-open" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        {t("location.quickCitiesTrigger")}
      </button>
      {isOpen ? (
        <div className="location-quick-cities__panel">
          {quickCityGroups.map((group) => (
            <section
              key={group.id}
              className="location-quick-cities__group"
              aria-label={group.label}
            >
              <h3 className="location-quick-cities__group-title">
                {group.label}
              </h3>
              <div className="location-quick-cities__grid">
                {group.cities.map((city) => (
                  <button
                    key={city.id}
                    type="button"
                    className="location-quick-cities__city"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      onSelect(mapQuickCityToSearchResult(city));
                      setIsOpen(false);
                    }}
                  >
                    {city.city}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : null}
    </div>
  );
}
