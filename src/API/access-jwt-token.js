export const jwtToken=async(email)=>{
    const res = await fetch(`${process.env.REACT_APP_PORT}/jwt?email=${email}`)
    const data = await res.json()
    return data
}