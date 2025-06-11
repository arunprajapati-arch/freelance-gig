import type { AccountType } from "@redb/db";
import type { Request, Response, NextFunction } from "express";
import { createLocalJWKSet, jwtVerify } from "jose";


const storedJWKS = {
    keys: [
       {
          alg: "EdDSA",
          crv: "Ed25519",
          x: "gAo--XBGHy87X5Zr2FGQm5oPaj3uxUFrvkNPOTXL6_A",
          kty: "OKP",
          kid: "emujXvD0d7JrEgEfUGIbIJliuathlFSG"
       }
    ]
 }
 const JWKS = createLocalJWKSet({
    keys: storedJWKS.keys!,
 })

export const authMiddleware =async  (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];
    console.log(token);

    if (!token) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

     
  const {payload} = await jwtVerify(token, JWKS,{
    issuer: 'http://localhost:3000', // Should match your JWT issuer, which is the BASE_URL
    audience: 'http://localhost:3000', // Should match your JWT audience, which is the BASE_URL by default
  });

  if(!payload || !payload.sub) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  req.userId = payload.sub as string;
  req.accountType = payload.accountType as string;
  
  console.log(req.userId);
  console.log(req.accountType);

    next();
};