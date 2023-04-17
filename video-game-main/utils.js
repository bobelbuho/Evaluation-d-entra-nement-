function lerp(A, B, t) {
    return A + (B - A) * t;
}
function getIntersection(A,B,C,D){
    const tTop=(D.x-C.x)*(A.y-C.y)-(D.y-A.y);
    const uTop=(C.y-A.y)*(A.x-B.x)-(C.x-A.x);
    const bottom = (D.y-C.y)*(B.x-A.x)-(D.x-C.x);

    if(bottom!=0){
        const t=tTop/bottom;
        const u=uTop/bottom;
        if(t>=0 && t<=1 && u>=0 && u<=1){
            return {
                x:lerp(A.x, B.x,t),
                y:lerp(A.y,B.y,t),
                offset:t
            }
        }
    }
    return null
}