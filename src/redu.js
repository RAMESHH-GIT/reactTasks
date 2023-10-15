// import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

// const initialState = {
//   data: [],
//   loading: false,
//   error: null
// }

// const formSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     setLoading: (state, action) => {
//       state.loading = true
//     },
//     setData: (state, action) => {
//       state.data = action.payload
//       state.loading = false
//     },
//     setError: (state, action) => {
//       state.error = action.payload
//       state.loading = false
//     }
//   }
// })

// export const { setLoading, setData, setError } = formSlice.actions

// export const submitForm = (formData) => async (dispatch) => {
//   try {
//     dispatch(setLoading())
//     const response = await axios.post('/api/submitform', formData)
//     dispatch(setData(response.data))
//   } catch (err) {
//     dispatch(setError(err))
//   }
// }

// export default formSlice.reducer



// import { useDispatch } from 'react-redux'
// import { submitForm } from './formSlice'

// function Form() {
//   const dispatch = useDispatch()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const formData = { ... } // gather form data
//     dispatch(submitForm(formData))
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* form fields */}
//     </form>
//   )
// }
// import { useSelector } from 'react-redux'

// function Form() {
//   const loading = useSelector((state) => state.form.loading)
//   const data = useSelector((state) => state.form.data)
//   const error = useSelector((state) => state.form.error)

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>
//   }

//   if (data) {
//     return <div>Form submitted successfully!</div>
//   }

//   // ...
// }
