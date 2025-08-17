import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';

import {
  Review
} from '../types/index'

export interface DataState {
  reviews: Review[];
  isLoading: boolean;
  error: string | null;
}

interface DataContextType {
  data: DataState;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const PAGE_CONTENT_CACHE_KEY = 'page-content-key';
const PAGE_CONTENT_CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours
//const CONTENT_URL = 'https://api.cleanday.com.ar/cleanday_content.json';
const CONTENT_URL = 'cleanday_content.json';

const getCachedData = <T,>(): T | null => {
  try {
    const cached = localStorage.getItem(PAGE_CONTENT_CACHE_KEY);
    if (!cached) return null;

    const { timestamp, data } = JSON.parse(cached);
    const isCacheValid =
      Date.now() - timestamp < PAGE_CONTENT_CACHE_DURATION;

    return isCacheValid ? (data as T) : null;
  } catch (error) {
    console.error('Error reading cache:', error);
    return null;
  }
};

const setCachedData = <T,>(data: T) => {
  try {
    localStorage.setItem(
      PAGE_CONTENT_CACHE_KEY,
      JSON.stringify({ timestamp: Date.now(), data })
    );
  } catch (error) {
    console.error('Error writing cache:', error);
  }
};

const fetchInitialData = async (): Promise<{ reviews: Review[] } | null> => {
  const cachedData = getCachedData<{ reviews: Review[] }>();
  if (cachedData) return cachedData;

  try {
    const response = await fetch(CONTENT_URL);
    if (!response.ok) {
      console.error(`Error fetching data, status: ${response.status}`);
      return null;
    }

    const data = await response.json();
    setCachedData(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DataState>({
    reviews: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchInitialData();

      if (fetchedData) {
        setData({
          reviews: fetchedData.reviews,
          isLoading: false,
          error: null,
        });
      } else {
        setData({
          reviews: [],
          isLoading: false,
          error: 'Failed to load data',
        });
      }
    };

    loadData();
  }, []);

  const value = useMemo(() => ({ data }), [data]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

