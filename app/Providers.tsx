'use client';

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";
import { PropsWithChildren } from "react";

const Providers = ({children} : PropsWithChildren) => {
    return(
    <ThirdwebProvider clientId={"623578f5196412a65f76bdf57a1a3bea"} activeChain={Mumbai}>{children}</ThirdwebProvider>
    );
}

export default Providers;