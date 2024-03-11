import React from 'react'

function PcHeader () {
  return (
    <div style={styles.headerContainer}>
        <div>צרו קשר</div>
        <div>בית</div>
    </div>
  )
}

export default PcHeader

const styles = {
    headerContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        gap:"10rem",
        backgroundColor:"red",
        padding:"2rem 0"
    }
}