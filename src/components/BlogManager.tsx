import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Upload, Video, Eye, Book } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  videoId?: string;
  type: 'hablemos-claro' | 'cuidado-vision';
  published: boolean;
  createdAt: string;
}

const BlogManager: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Cuidado de la Vista en Casa',
      content: 'Consejos prácticos para mantener una buena salud visual desde la comodidad de tu hogar.',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop',
      videoId: 'dQw4w9WgXcQ',
      type: 'hablemos-claro',
      published: true,
      createdAt: '2025-01-08'
    },
    {
      id: '2',
      title: 'Protege tu Vista del Sol',
      content: 'Usar gafas de sol con protección UV es esencial para mantener la salud de tus ojos.',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop',
      type: 'cuidado-vision',
      published: true,
      createdAt: '2025-01-07'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    videoId: '',
    type: 'hablemos-claro' as 'hablemos-claro' | 'cuidado-vision'
  });

  const handleAddPost = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      content: '',
      image: '',
      videoId: '',
      type: 'hablemos-claro'
    });
    setShowForm(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      image: post.image,
      videoId: post.videoId || '',
      type: post.type
    });
    setShowForm(true);
  };

  const handleSavePost = () => {
    if (editingPost) {
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { ...post, ...formData }
          : post
      ));
    } else {
      const newPost: BlogPost = {
        id: Date.now().toString(),
        ...formData,
        published: true,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setPosts([newPost, ...posts]);
    }
    setShowForm(false);
    setEditingPost(null);
  };

  const handleDeletePost = (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const togglePublished = (id: string) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, published: !post.published } : post
    ));
  };

  if (showForm) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-onix">
            {editingPost ? 'Editar Post' : 'Crear Nuevo Post'}
          </h2>
          <button
            onClick={() => setShowForm(false)}
            className="text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Post
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as 'hablemos-claro' | 'cuidado-vision' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent"
            >
              <option value="hablemos-claro">Información y Tips</option>
              <option value="cuidado-vision">Novedades sobre Salud Visual</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent"
              placeholder="Título del post"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contenido
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent"
              placeholder="Contenido del post"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL de Imagen
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent"
              placeholder="https://ejemplo.com/imagen.jpg"
            />
          </div>

          {formData.type === 'hablemos-claro' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ID de Video de YouTube
              </label>
              <input
                type="text"
                value={formData.videoId}
                onChange={(e) => setFormData({ ...formData, videoId: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent"
                placeholder="dQw4w9WgXcQ"
              />
              <p className="text-sm text-gray-600 mt-1">
                Extrae el ID del enlace de YouTube (ejemplo: https://youtube.com/watch?v=<strong>dQw4w9WgXcQ</strong>)
              </p>
            </div>
          )}

          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSavePost}
              className="px-6 py-2 bg-wood text-white rounded-lg hover:bg-wood-dark transition-colors flex items-center space-x-2"
            >
              <Save size={20} />
              <span>Guardar</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-onix">Gestión del Blog</h2>
        <button
          onClick={handleAddPost}
          className="bg-wood text-white px-4 py-2 rounded-lg hover:bg-wood-dark transition-colors flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Nuevo Post</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Post
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {post.content}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {post.type === 'hablemos-claro' ? (
                        <Video size={16} className="text-red-500" />
                      ) : (
                        <Eye size={16} className="text-blue-500" />
                      )}
                      <span className="text-sm text-gray-600">
                        {post.type === 'hablemos-claro' ? 'Info/Tips' : 'Novedades'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => togglePublished(post.id)}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.published
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {post.published ? 'Publicado' : 'Borrador'}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditPost(post)}
                        className="text-wood hover:text-wood-dark"
                        title="Editar"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Eliminar"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {posts.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-gray-400 mb-4">
            <Book size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No hay posts aún</h3>
          <p className="text-gray-600 mb-4">Comienza creando tu primer post del blog.</p>
          <button
            onClick={handleAddPost}
            className="bg-wood text-white px-6 py-2 rounded-lg hover:bg-wood-dark transition-colors"
          >
            Crear Primer Post
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogManager;
