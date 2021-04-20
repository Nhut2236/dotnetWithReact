using HooksLearning.Models;
using Microsoft.AspNetCore.Mvc;

namespace HooksLearning.Controllers
{
    public class BaseController : Controller
    {
        protected readonly Context context;

        public BaseController(Context _context)
        {
            this.context = _context;
        }
    }
}
