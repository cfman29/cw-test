import React from "react"
// import '../style.css'
import items from './collectionItems.json'

export const collectionItems =()=> {
    return(
        <div className="featured__collection">
            { items.map(item=> {
                let tagsArray:string[]
                tagsArray=[]
                tagsArray = [""]
                if (item.tags.length > 0) {
                    tagsArray = item.tags
                }
                return(
                    <div className="featured__collection__single" key={ item.id } style={{ backgroundImage: `url("http://placekitten.com/g/700")` }}>
                        <span className="featured__collection__single__line" />
                        <h2 className="featured__collection__single__category">{ item.category }</h2>
                        <h1 className="featured__collection__single__title">{ item.title }</h1>
                        <div className="featured__collection__single__tags"> 
                            {tagsArray.map(tag=>{
                                return(
                                    <p className="featured__collection__single__tags__single" key={tag}> {tag} </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default collectionItems