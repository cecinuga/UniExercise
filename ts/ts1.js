function sommaCifre(v) {
    if (Math.floor(v / 10) == 0) return v;
    return v % 10 + sommaCifre(Math.floor(v / 10));
};console.log(sommaCifre(4679132544));
