import { RouteRepositoryInterface } from "../domain/route-repository";
import { LatLng } from "../domain/route.entity";


export class ListAllRoutesUseCase {

    constructor(private routeRepo: RouteRepositoryInterface){}

    async execute(): Promise<CreateRouteOutput>{
        const routes = await this.routeRepo.findAll();
        return routes.map(r => r.toJSON());
    }

}

type CreateRouteOutput = {
    id: string;
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[];
}[]