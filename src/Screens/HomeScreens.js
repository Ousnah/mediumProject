import { useContext } from "react"
import { StoreContext } from "../Providers/Store"

export default function ArticlesScreens() {

    const {
        articles, setArticles,
        categories, setCategories,
        currentCategory, setCurrentCategory
    } = useContext(StoreContext)

    return <div>

        <select onChange={(e) => {
            setCurrentCategory(e.target.value)
        }}>
            <option value={0}>ALL</option>
            {categories.map((category) => {
                return <option value={category.id}>{category.name}</option>
            })}
        </select>

        <div>

        </div>

        {articles.filter((article) => {
            if (article.article_category_id == currentCategory || currentCategory == 0) {
                return true
            } else {
                return false
            }
        }).map((article) => {
            return (<div>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                <hr />
            </div>)
        })}

    </div>

}