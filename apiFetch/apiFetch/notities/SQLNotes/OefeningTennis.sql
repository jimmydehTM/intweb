-- Oefening 1
SELECT Id

FROM Tennis.Speler
WHERE lidSinds BETWEEN '2000' AND '2003';

--Oefening 2
SELECT Id

FROM Tennis.Boete
WHERE bedrag BETWEEN '50' AND '100';

--Oefening 3
SELECT Id

FROM Tennis.Boete
WHERE (bedrag  < 50) OR ( bedrag > 100);

--Oefening 4
SELECT Id

FROM Tennis.Speler
WHERE (plaats  != 'Den Haag') AND ( plaats != 'Voorburg');

--Oefening 5
SELECT Id,
	   naam

FROM Tennis.Speler
WHERE naam LIKE '%en%';

--Oefening 6
SELECT naam,
	   Id

FROM Tennis.Speler
WHERE naam LIKE '%a_'
ORDER BY naam ASC;

--Oefening 7
SELECT Id,
	   naam,
	   voornaam

FROM Tennis.Speler
WHERE naam LIKE '%_e_';

--Oefening 8
SELECT Id,
	   bedrag,


	CASE 
		WHEN bedrag BETWEEN 0 AND 40
		THEN 'Laag'
		WHEN bedrag BETWEEN 41 AND 80
		THEN 'middelmatig'
		WHEN bedrag > 80
		THEN 'hoog'
	END AS 'categorie'
	FROM Tennis.Boete;

	--Oefening 9
SELECT Id,


	CASE 
		divisie
		WHEN 'ere'
		THEN 'eredivisie'
		WHEN 'tweede'
		THEN 'tweede divisie'
		
	END AS 'divisie'
	FROM Tennis.Team;
	

--Oefening 10
SELECT spelerId,
		bedrag
	   
FROM Tennis.Boete
WHERE bedrag > 0;

--Oefening 11

		
	   
SELECT DISTINCT 
	lidSinds
FROM Tennis.Speler
WHERE lidSinds > '1999'
ORDER BY lidSinds ASC;


--Oefening 12

		
	   
SELECT DISTINCT 
	spelerId
FROM Tennis.Bestuurslid
WHERE functie = 'penningmeester'
ORDER BY spelerId ASC;