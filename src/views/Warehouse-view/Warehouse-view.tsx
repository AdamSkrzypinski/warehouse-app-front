import React, { useEffect, useState } from "react";
import { AreaEntity } from "../../types/area";
import { apiUrl } from "../../config/api";
import { AreasList } from "../../components/Warehouse/Areas-list/Areas-list";
import { Spinner } from "../../components/common/Spinner/Spinner";

export const WarehouseView = () => {
  const [areasList, setAreasList] = useState<AreaEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    try {
      (async () => {
        const res = await fetch(`${apiUrl}/location/area`);
        const data = await res.json();
        setAreasList(data);
        setLoading(false);
      })();
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <AreasList areas={areasList} />
    </>
  );
};
