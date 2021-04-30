class NearEarthAdapter {
  constructor(data) {
    this.data = data;
    this.orbitingBodys = [];
    this.adaptedData = [];
    this.init();
  }

  init() {
    this.fetchNearEarthAdapter();
  }

  fetchNearEarthAdapter = () => {
    this.adaptedData = this.sortNearEarthData(
      this.data.near_earth_objects
    ).reduce((acc, current) => {
      let estimated_kilometers = current?.estimated_diameter?.kilometers;
      let close_approach_data = current.close_approach_data;
      acc.push([
        current?.name,
        estimated_kilometers?.estimated_diameter_min,
        estimated_kilometers?.estimated_diameter_max,
      ]);
      for (let i = 0; i < close_approach_data.length; i++) {
        if (
          !this.orbitingBodys.includes(close_approach_data[i].orbiting_body)
        ) {
          this.orbitingBodys.push(close_approach_data[i].orbiting_body);
        }
      }
      return acc;
    }, []);
  };

  filterData = (orbitingBody) => {
    return this.sortNearEarthData(this.data.near_earth_objects).reduce(
      (acc, current) => {
        let estimated_kilometers = current?.estimated_diameter?.kilometers;
        let close_approach_data = current.close_approach_data;
        for (let i = 0; i < close_approach_data.length; i++) {
          if (orbitingBody === close_approach_data[i].orbiting_body) {
            acc.push([
              current?.name,
              estimated_kilometers?.estimated_diameter_min,
              estimated_kilometers?.estimated_diameter_max,
            ]);
            break;
          }
        }
        return acc;
      },
      []
    );
  };

  sortNearEarthData = (data) => {
    return data.sort(
      (a, b) =>
        b?.estimated_diameter?.kilometers.estimated_diameter_min -
        a?.estimated_diameter?.kilometers.estimated_diameter_min
    );
  };

  getOrbitingBods = () => {
    return this.orbitingBodys;
  };

  getAdaptedData = (fitler) => {
    if (fitler !== "") {
      return this.filterData(fitler);
    }
    return this.adaptedData;
  };
}

export { NearEarthAdapter };
