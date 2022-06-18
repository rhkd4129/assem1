import useSWR from "swr";
import { getAll, getClusterGenerator } from "@actions/monitoring";

export function useCluster(opt) {
  const {
    data: data1,
    mutate: mutate1,
    error: error1,
  } = useSWR("getClusterList", getAll);
  const clustList =
    data1 && data1.value !== undefined ? data1.value.clusters : [];

  const {
    data: data2,
    mutate: mutate2,
    error: error2,
  } = useSWR(Number(opt.seq), getClusterGenerator);
  const clustGeneratorList =
    data2 && data2.value !== undefined ? data2.value.generators : [];

  const selectedClust =
    data2 && data2.value !== undefined ? data2.value.clusters : [];

  return {
    loading: (!data1 && !error1) || (!data2 && !error2),
    clustList,
    selectedClust,
    mutate1,
    error1,
    clustGeneratorList,
    mutate2,
    error2,
  };
}

export function useClusterGenerator(opt) {}