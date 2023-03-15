function unix(dt, type) {
    let milliseconds = dt * 1000
    const data = new Date(milliseconds)
    let result = 
    type == 'weekday' ? data.toLocaleString('ru-Ru', {weekday: 'long'}) :
    type == 'month' ? data.toLocaleString('ru-Ru', {month: 'long'}) :
    type == 'day' ? data.toLocaleString('ru-Ru', {day: 'numeric'}) : ''
    
    return result
}
export default unix