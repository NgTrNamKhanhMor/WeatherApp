export function temperatureText(temp){
    return Math.floor(temp) +"°C"
}

export function formatTimestampToHour(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

export function formatTimestampToDay(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

export function parseTimeString(timeString) {
    const regex = /^(\d{1,2}:\d{2})\s*(AM|PM)$/;
    const match = timeString.match(regex);
  
    if (match) {
      const [, time, period] = match;
      return [time, period];
    } else {
      throw new Error('Invalid time format');
    }
  }