"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const app_module_1 = require("../app.module");
const request = require("supertest");
describe("AppController (e2e)", () => {
    let app;
    beforeEach(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [app_module_1.AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    it("/ (GET)", () => {
        return request(app.getHttpServer())
            .get("/")
            .expect(200)
            .expect("Hello World!");
    });
});
//# sourceMappingURL=oldtest.js.map