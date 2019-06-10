import { metaToModel } from './metaToMongoose'
import {
  MArray,
  MBool,
  MDate,
  MMT,
  MNumber,
  MString,
} from 'devfractal-meta-core'

test('metaToModel', () => {
  const meta = MMT({
    name: MString(),
    living: MBool(),
    updated: MDate(),
    age: MNumber({ min: 18, max: 65 }),
    ofDates: MArray(MDate()),
    ofArrayOfNumbers: MArray(MArray(MNumber())),
    nested: MMT({ stuff: MString({ case: 'lower' }) }),
  })

  const Thing = metaToModel('Thing', meta)

  const m: any = new Thing()

  m.name = 'Statue of Liberty'
  m.living = false
  m.updated = new Date()
  m.age = 145

  m.ofArrayOfNumbers.push([100, 10])
  m.ofDates.push(new Date())
  m.nested.stuff = 'good'

  expect(m.validateSync().errors).toMatchInlineSnapshot(`
    Object {
      "age": [ValidatorError: Path \`age\` (145) is more than maximum allowed value (65).],
    }
  `)
})
