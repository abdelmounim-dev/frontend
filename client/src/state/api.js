import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Vehicules",
    "Chauffeurs",
    "Carburant",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
    getVehicule: build.query({
      query: () => "/vehicule",
      providesTags: ["Vehicules"],
    }),
    postVehicule: build.mutation({
        query: (body) => ({
            url: "/vehicule",
            method: "POST",
            body,
        }),
        invalidatesTags: ["Vehicules"],
    },),
    getChauffeur: build.query({
      query: () => "/employe/chauffeur",
      providesTags: ["Chauffeurs"],
    }),
    postChauffeur: build.mutation({
        query: (body) => ({
            url: "/employe/chauffeur",
            method: "POST",
            body,
        }),
        invalidatesTags: ["Chauffeurs"],
    },),
    updateChauffeur: build.mutation({
        query: (body) => ({
            url: "/employe/chauffeur/"+body._id,
            method: "PATCH",
            body,
        }),
        invalidatesTags: ["Chauffeurs"],
    },),
    deleteChauffeur: build.mutation({
        query: (id) => ({
            url: "/employe/chauffeur/"+id,
            method: "DELETE",
        }),
        invalidatesTags: ["Chauffeurs"],
    },),
    getCarburant: build.query({
      query: () => "/carburant",
      providesTags: ["Carburant"],
    }),

    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/vehicules",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetVehiculeQuery,
    usePostVehiculeMutation,
  useGetChauffeurQuery,
    usePostChauffeurMutation,
    useUpdateChauffeurMutation,
    useDeleteChauffeurMutation,

  useGetCartesQuery: useGetCarbuantQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
