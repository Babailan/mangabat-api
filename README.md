# Mangabat-API

Welcome to the Mangabat-API documentation. This API serves as a source for manga-related data, offering a range of functionalities to retrieve and interact with manga information.
## Table of Contents

- [API Reference](#api-reference)
  - [Search for Manga](#search-for-manga)
  - [Get Specific Manga](#get-specific-manga)
## API Reference

This section provides details about the endpoints available in the **Mangabat-API** and the respective parameters they accept. 

### Search for Manga

Search for manga using the following endpoint:

```http
GET /search
```

**Parameters:**

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `q`       | `string` | **Required**. Query string for search |

**Response:**

An array of manga data matching the search criteria.

### Get Specific Manga

Retrieve specific manga details using the following endpoint:

```http
GET /info
```

**Parameters:**

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| `id`      | `string` | **Required**. Manga ID |

**Response:**

Detailed information about the specified manga.




## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

