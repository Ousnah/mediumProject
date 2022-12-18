import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext()

export function StoreProvider(props) {

    const [articles, setArticles] = useState([])
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState(0)

    useEffect(() => {

        fetch("http://edu.project.etherial.fr/articles").then((response) => {
            response.json().then((json) => {
                setArticles(json.data)
            })
        })

        fetch("http://edu.project.etherial.fr/articles/categories").then((response) => {
            response.json().then((json) => {
                setCategories(json.data)
            })
        })

    }, [])

    return (
        <StoreContext.Provider value={{
            articles, setArticles,
            categories, setCategories,
            currentCategory, setCurrentCategory
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}