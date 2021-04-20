using HooksLearning.Models;

namespace HooksLearning.Dao
{
    public class DaoBase
    {
        protected readonly Context context;
        public DaoBase(Context _context)
        {
            context = _context;
        }
    }
}
