export interface Pokemon {

    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    location_area_encounters: string,
    sprites: {
        other: {
            home: {
                front_default: string;
            }
        }
    }
    types: [
        {
            slot: number,
            type: {
                name: string,
                url: string
            }
        }
    ]
}