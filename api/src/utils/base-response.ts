
class Response {
    data: any;
    error: any;
}
export class BaseResponse {
    response: Response;

    constructor(data: any = {}, error: any = undefined) {
        this.response = new Response();
        this.response.data = data;
        this.response.error = error;
    }
}
