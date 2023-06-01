import {useState, useEffect} from 'react'
import {db} from '../firebase/config'

// firebase imports
import {collection, onSnapshot} from 'firebase/firestore'

export const useCollection = (firebaseCollection) => {
    const[documents, setDocuments] = useState(null)

    useEffect(()=>{
        let ref = collection(db, firebaseCollection)

        const unsub = onSnapshot(ref, (snapshot)=>{
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id:doc.id})
            })
            setDocuments(results)
        })

        return ()=> unsub()
    }, [firebaseCollection])

    return {documents}
}