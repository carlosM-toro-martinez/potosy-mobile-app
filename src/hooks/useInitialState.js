import { useState, useEffect } from 'react';
import Eventos from '../components/Eventos/eventos .json';

const NEWS = 'http://api.potosymasquehistoria.com/api/v1/news';
const APARTADOS = 'http://api.potosymasquehistoria.com/api/v1/sections';
const BUSINESS = 'http://api.potosymasquehistoria.com/api/v1/business/section';

export default function useInitialState() {
  const [ubicationDevice, setUbicationDevice] = useState([]);
  const [destinationPosition, setDestinationPosition] = useState([
    -65.7542, -19.5889,
  ]);
  const [data, setData] = useState([]);
  const [apartados, setApartados] = useState([]);
  const [evento, setEvento] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSection, setLoadingSection] = useState(true);
  const [press, setPress] = useState(false);
  const [search, setSearch] = useState('');
  const [searchedItems, setSearchedItem] = useState([]);
  const [route, setRoute] = useState('Secciones');
  const [filterEvents, setFilterEvents] = useState({});
  const [idSection, setIdSection] = useState();
  const [sectionDes, setSectionDes] = useState();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(NEWS);
        const result = await response.json();
        //setEvento(result.data);
        setEvento(result);
      };
      getData();
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(APARTADOS);
        if (!response.ok) {
          console.error(`Error en la solicitud: ${response.status}`);
          return;
        }
        const result = await response.json();
        setApartados(result);
        if (response.status === 200) {
          setLoadingSection(false);
        }
      };
      getData();
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${BUSINESS}/${idSection}`);
        if (!response.ok) {
          console.error(`Error en la solicitud: ${response.status}`);
          return;
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
        //console.error('Error en la solicitud:', error);
      }
    };
    if (idSection) {
      fetchData();
    }
  }, [idSection]);


  useEffect(() => {
    if (search.length > 0) setSearch('');
  }, [route]);

  return {
    ubicationDevice,
    destinationPosition,
    loading,
    press,
    searchedItems,
    evento,
    loadingSection,
    route,
    search,
    filterEvents,
    data,
    apartados,
    sectionDes,
    darkMode,
    setDarkMode,
    setSectionDes,
    setIdSection,
    setData,
    setFilterEvents,
    setSearchedItem,
    setRoute,
    setDestinationPosition,
    setUbicationDevice,
    setPress,
    setSearch,
  };
}
