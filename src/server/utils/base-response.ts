export class BaseResponse {
    data: any;
    error: any;

    constructor(data: any = {}, error: any = undefined) {
        this.data = data;
        this.error = error;
    }
}
