import { CategoryItem } from './CategoryItem'

export function CategoryList({catalog = []}) {
    return(
        <div className="grid grid-cols-6 gap-4">
            {catalog.map((el) => (
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    )
}