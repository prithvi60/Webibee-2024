"use client";
import { Card, CardHeader, CardBody} from "@nextui-org/react";

export const BenefitCard = ({ item }: { item: any }) => {
  return (
    <Card className="w-[250px] sm:w-[320px] min-h-[225px] font-Merri">
      <CardHeader className="flex gap-3 bg-black font-Merri justify-center items-center font-bold capitalize">
        <h2 className="text-default text-xl px-2">{item.title}</h2>
      </CardHeader>
      {/* <Divider className="bg-warning" /> */}
      <CardBody className="pb-10 text-center bg-secondary">
        <p className="font-medium text-default text-lg px-2 py-2">{item.para}</p>
      </CardBody>
    </Card>
  );
};
