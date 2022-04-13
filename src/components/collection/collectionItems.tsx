import React from "react"
// import '../style.css'
import items from './collectionItems.json'

export const collectionItems =()=> {
    return(
        <div className="featured__collection__grid">
            { items.map(item=> {
                let tagsArray:string[]
                tagsArray=[]
                if (item.tags.length > 0) {tagsArray = item.tags}
                return(
                    <div className="featured__collection__grid__single" key={ item.id }>
                        <h2>{ item.category }</h2>
                        <h1>{ item.title }</h1>
                        {
                            tagsArray.map(tag=>{
                                return(
                                <p>{tag}</p>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    )

}

export default collectionItems