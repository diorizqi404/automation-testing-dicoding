const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
    it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
        const figureCalculator = new FigureCalculator({})

        expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
        expect(figureCalculator).toHaveProperty('calculateRectangleArea');
        expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
        expect(figureCalculator).toHaveProperty('calculateTriangleArea');
        expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
        expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
    })

    describe('A calculateRectanglePerimeter Function', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({})
            
            expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError()
            expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError()
            expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError()
          })
    
        it('should throw error when given non-number parameters', () => {
            const figureCalculator = new FigureCalculator({})
    
            expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError()
            expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError()
            expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError()
        })

        it('should return correct value based on rectangle perimeter formula', () => {
            // arrange
            // persiapan, mengumpulkan segala kebutuhan untuk menjalankan skenario
            const length = 20
            const width = 10
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const figureCalculator = new FigureCalculator(MathBasic)

            // action
            // aksi dari sistem yang diuji
            const result = figureCalculator.calculateRectanglePerimeter(length, width)


            // assert
            // pengecekan hasil uji yang diharapkan setelah aksi dilakukan3
            expect(result).toEqual(60)
            expect(spyAdd).toHaveBeenCalledWith(length, width)
            expect(spyMultiply).toHaveBeenCalledWith(2, 30)
            
        })
    })

    describe('A calculateRectangleArea function', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateRectangleArea()).toThrowError()
            expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError()
            expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError()
        })

        it('should throw error when given non-number parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError()
            expect(() => figureCalculator.calculateRectangleArea(null, '2')).toThrowError()
            expect(() => figureCalculator.calculateRectangleArea([], {})).toThrowError()
        })

        it('should return correct value based on rectangle area formula', () => {
            const length = 20
            const width = 10
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const figureCalculator = new FigureCalculator(MathBasic)

            const result = figureCalculator.calculateRectangleArea(length, width)

            expect(result).toEqual(200)
            expect(spyMultiply).toHaveBeenCalledWith(length, width)
        })
    })

    describe('A calculateTrianglePerimeter function', () => {
        it('should throw error when non given 3 parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError()
            expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError()
            expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError()
            expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError()
        })

        it('should throw error when given non-number parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTrianglePerimeter(true, {}, [])).toThrowError()
            expect(() => figureCalculator.calculateTrianglePerimeter('1', null, [])).toThrowError()
        })

        it('should return correct value based on triangle perimeter formula', () => {
            const sideA = 10
            const sideB = 15
            const base = 20
            const spyAdd = jest.spyOn(MathBasic, 'add')
            const figureCalculator = new FigureCalculator(MathBasic)

            const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base)

            expect(result).toEqual(45)
            expect(spyAdd).toHaveBeenCalledWith(sideA, (sideB + base))
        })
    })

    describe('A calculateTriangleArea function', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTriangleArea()).toThrowError()
            expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError()
            expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError()
        })

        it('should throw error when given non-number parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError()
            expect(() => figureCalculator.calculateTriangleArea(true, '2')).toThrowError()
            expect(() => figureCalculator.calculateTriangleArea({}, [])).toThrowError()
        })

        it('should return correct value based on triangle area formula', () => {
            const height = 20
            const base = 10
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const figureCalculator = new FigureCalculator(MathBasic)

            const result = figureCalculator.calculateTriangleArea(height, base)

            expect(result).toEqual(100)
            expect(spyMultiply).toHaveBeenCalledWith(0.5, (height * base))
        })
    })
})