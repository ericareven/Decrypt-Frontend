import {PostsContext} from '../context/postsContext'
import {useContext} from 'react'

export const usePostsContext = () => {
    const context = useContext(PostsContext)

    if(!context) {
        throw Error('usePostsContext/PostsContextProvider error')
    }
return context
}


