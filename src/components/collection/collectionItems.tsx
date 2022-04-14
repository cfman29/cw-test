import React from "react"
// import '../style.css'
import items from './collectionItems.json'

export const collectionItems =()=> {
    return(
        <div className="featured__collection__grid">
            { items.map(item=> {
                let tagsArray:string[]
                tagsArray=[]
                let tagClass:string = ''
                if (item.tags.length > 0) {
                    tagsArray = item.tags
                    tagClass='featured__collection__grid__single__margin'
                }
                return(
                    <div className="featured__collection__grid__single" key={ item.id } style={{ backgroundImage: `url(./${item.image}.png)` }}>
                        <span className={`featured__collection__grid__single__line ${tagClass}`} />
                        <h2 className="featured__collection__grid__single__category">{ item.category }</h2>
                        <h1 className="featured__collection__grid__single__title">{ item.title }</h1>
                        <div className="featured__collection__grid__single__tags"> 
                            {tagsArray.map(tag=>{
                                if(!tag){return}
                                return(
                                    <p key={tag}> {tag} </p>
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