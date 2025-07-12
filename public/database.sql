
-- Base de datos para el sistema de administración de monturas
-- MySQL Database Schema

CREATE DATABASE IF NOT EXISTS optical_store;
USE optical_store;

-- Tabla de marcas
CREATE TABLE brands (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    logo VARCHAR(500),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de productos
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    ref VARCHAR(50) NOT NULL UNIQUE,
    material VARCHAR(100) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    description TEXT,
    gender ENUM('hombres', 'mujeres', 'niños', 'unisex') DEFAULT 'unisex',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_ref (ref),
    INDEX idx_brand (brand),
    INDEX idx_gender (gender)
);

-- Tabla de categorías
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    label VARCHAR(100) NOT NULL
);

-- Tabla de relación productos-categorías (muchos a muchos)
CREATE TABLE product_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    UNIQUE KEY unique_product_category (product_id, category_id)
);

-- Tabla de imágenes de productos
CREATE TABLE product_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    image_order TINYINT DEFAULT 0,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_product_order (product_id, image_order)
);

-- Tabla de colores disponibles
CREATE TABLE product_colors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    color_name VARCHAR(50) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_product_id (product_id)
);

-- Insertar categorías predefinidas
INSERT INTO categories (name, label) VALUES
('marcas', 'Marcas'),
('gafas-sol', 'Gafas de Sol'),
('gafas-oftalmicas', 'Gafas Oftálmicas'),
('hombres', 'Hombres'),
('mujeres', 'Mujeres'),
('niños', 'Niños');

-- Insertar marcas de ejemplo
INSERT INTO brands (name, logo, description) VALUES
('Ray-Ban', 'https://images.unsplash.com/photo-1556306535-38febf6782ef?w=200&h=100&fit=crop', 'Marca icónica de gafas con más de 80 años de historia'),
('Oakley', 'https://images.unsplash.com/photo-1556306535-38febf6782ef?w=200&h=100&fit=crop', 'Especialistas en gafas deportivas de alta tecnología'),
('Kids Vision', 'https://images.unsplash.com/photo-1556306535-38febf6782ef?w=200&h=100&fit=crop', 'Marca especializada en monturas para niños');

-- Insertar productos de ejemplo
INSERT INTO products (name, ref, material, brand, description, gender) VALUES
('Montura Clásica Premium', 'VZ-001', 'Acetato Italiano', 'Ray-Ban', 'Elegante montura clásica perfecta para uso diario', 'unisex'),
('Gafas de Sol Deportivas', 'VZ-002', 'Policarbonato', 'Oakley', 'Protección UV400 con diseño deportivo moderno', 'hombres'),
('Montura Infantil Colorida', 'VZ-003', 'Silicona Flexible', 'Kids Vision', 'Montura resistente y cómoda para niños', 'niños');

-- Insertar relaciones producto-categoría
INSERT INTO product_categories (product_id, category_id) VALUES
-- Producto 1: Montura Clásica Premium
(1, 3), -- gafas-oftalmicas
(1, 4), -- hombres
(1, 5), -- mujeres
-- Producto 2: Gafas de Sol Deportivas
(2, 2), -- gafas-sol
(2, 4), -- hombres
-- Producto 3: Montura Infantil Colorida
(3, 3), -- gafas-oftalmicas
(3, 6); -- niños

-- Insertar imágenes de productos
INSERT INTO product_images (product_id, image_url, image_order) VALUES
-- Producto 1
(1, 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop', 0),
(1, 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop', 1),
(1, 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop', 2),
-- Producto 2
(2, 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop', 0),
(2, 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop', 1),
-- Producto 3
(3, 'https://images.unsplash.com/photo-1583792028088-daa9b71e97fc?w=400&h=300&fit=crop', 0),
(3, 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop', 1);

-- Insertar colores de productos
INSERT INTO product_colors (product_id, color_name) VALUES
-- Producto 1
(1, 'Negro'),
(1, 'Marrón'),
(1, 'Azul Marino'),
-- Producto 2
(2, 'Negro'),
(2, 'Blanco'),
(2, 'Rojo'),
-- Producto 3
(3, 'Rosa'),
(3, 'Azul'),
(3, 'Verde');

-- Vistas útiles para consultas
CREATE VIEW product_details AS
SELECT 
    p.id,
    p.name,
    p.ref,
    p.material,
    p.brand,
    p.description,
    p.gender,
    GROUP_CONCAT(DISTINCT c.label) as categories,
    GROUP_CONCAT(DISTINCT pc.color_name) as colors,
    GROUP_CONCAT(DISTINCT pi.image_url ORDER BY pi.image_order) as images,
    p.created_at,
    p.updated_at
FROM products p
LEFT JOIN product_categories pcat ON p.id = pcat.product_id
LEFT JOIN categories c ON pcat.category_id = c.id
LEFT JOIN product_colors pc ON p.id = pc.product_id
LEFT JOIN product_images pi ON p.id = pi.product_id
GROUP BY p.id;

-- Procedimientos almacenados útiles

DELIMITER //

-- Procedimiento para agregar un producto completo
CREATE PROCEDURE AddProduct(
    IN p_name VARCHAR(200),
    IN p_ref VARCHAR(50),
    IN p_material VARCHAR(100),
    IN p_brand VARCHAR(100),
    IN p_description TEXT,
    IN p_gender ENUM('hombres', 'mujeres', 'niños', 'unisex'),
    IN p_categories JSON,
    IN p_colors JSON,
    IN p_images JSON
)
BEGIN
    DECLARE product_id INT;
    DECLARE i INT DEFAULT 0;
    DECLARE category_count INT;
    DECLARE color_count INT;
    DECLARE image_count INT;
    
    START TRANSACTION;
    
    -- Insertar producto
    INSERT INTO products (name, ref, material, brand, description, gender)
    VALUES (p_name, p_ref, p_material, p_brand, p_description, p_gender);
    
    SET product_id = LAST_INSERT_ID();
    
    -- Insertar categorías
    SET category_count = JSON_LENGTH(p_categories);
    WHILE i < category_count DO
        INSERT INTO product_categories (product_id, category_id)
        SELECT product_id, id FROM categories 
        WHERE name = JSON_UNQUOTE(JSON_EXTRACT(p_categories, CONCAT('$[', i, ']')));
        SET i = i + 1;
    END WHILE;
    
    -- Insertar colores
    SET i = 0;
    SET color_count = JSON_LENGTH(p_colors);
    WHILE i < color_count DO
        INSERT INTO product_colors (product_id, color_name)
        VALUES (product_id, JSON_UNQUOTE(JSON_EXTRACT(p_colors, CONCAT('$[', i, ']'))));
        SET i = i + 1;
    END WHILE;
    
    -- Insertar imágenes
    SET i = 0;
    SET image_count = JSON_LENGTH(p_images);
    WHILE i < image_count DO
        INSERT INTO product_images (product_id, image_url, image_order)
        VALUES (product_id, JSON_UNQUOTE(JSON_EXTRACT(p_images, CONCAT('$[', i, ']'))), i);
        SET i = i + 1;
    END WHILE;
    
    COMMIT;
END //

DELIMITER ;

-- Índices adicionales para optimización
CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_products_created_at ON products(created_at);
CREATE INDEX idx_product_images_order ON product_images(product_id, image_order);

-- Comentarios en las tablas
ALTER TABLE products COMMENT = 'Tabla principal de productos/monturas';
ALTER TABLE categories COMMENT = 'Categorías disponibles para los productos';
ALTER TABLE product_categories COMMENT = 'Relación muchos a muchos entre productos y categorías';
ALTER TABLE product_images COMMENT = 'Imágenes asociadas a cada producto';
ALTER TABLE product_colors COMMENT = 'Colores disponibles para cada producto';
ALTER TABLE brands COMMENT = 'Marcas de productos';
