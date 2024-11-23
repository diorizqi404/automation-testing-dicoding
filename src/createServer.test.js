const createServer = require('./createServer');
const MathBasic = require('./MathBasic');

describe('a http server', () => {
    describe('when GET /add', () => {
        it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
            const a = 10
            const b = 5
            const spyAdd = jest.spyOn(MathBasic, 'add')
            const server = createServer({mathBasic: MathBasic})

            const response = await server.inject({
                method: 'GET',
                url: `/add/${a}/${b}`
            })

            const responseJson = JSON.parse(response.payload)
            expect(response.statusCode).toEqual(200)
            expect(responseJson.value).toEqual(15)
            expect(spyAdd).toHaveBeenCalledWith(a, b)
        })
    })

})