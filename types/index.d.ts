type ProductCategories = string[]
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never