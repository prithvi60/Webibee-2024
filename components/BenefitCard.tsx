"use client";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export const BenefitCard = ({ item }: { item: any }) => {
  return (
    <Card className="w-[280px] sm:w-[320px]">
      <CardHeader className="flex gap-3 bg-black-gradient font-Lato justify-center items-center">
        <h3 className="text-white text-bold text-xl px-2">{item.title}</h3>
      </CardHeader>
      <Divider />
      <CardBody className="pb-10 text-center">
        <p className="font-bold text-lg px-2 py-2">{item.para}</p>
      </CardBody>
    </Card>
  );
};
