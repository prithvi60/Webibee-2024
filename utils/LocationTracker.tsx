import geoip from 'geoip-lite';

const getPricing = (ip: any) => {
    const geo = geoip.lookup(ip);
    if (geo && geo.country === 'IN') {
        return '₹2,50,000';
    } else {
        return '$2500';
    }
};

export default getPricing;
