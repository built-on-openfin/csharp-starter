using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenFin.Shared.WorkspaceManagement
{
    public class ApplicationSnapshotConverter
    {
        public static ApplicationSnapshot FromBase64JsonEncodedString(string snapshot)
        {
            try
            {
                if (snapshot != null)
                {
                    var valueBytes = Convert.FromBase64String(snapshot);
                    var jsonString = Encoding.Unicode.GetString(valueBytes);
                    
                    JsonTextReader reader = new JsonTextReader(new StringReader(jsonString));
                    JsonSerializer serializer = new JsonSerializer();
                    ApplicationSnapshot appSnapshot = serializer.Deserialize<ApplicationSnapshot>(reader);
                    return appSnapshot;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error parsing passed snapshot");
                Console.WriteLine(ex.Message);
            }
            return null;
        }

        public static string ToBase64JsonEncodedString(ApplicationSnapshot snapshot)
        {
            try
            {
                string output = JsonConvert.SerializeObject(snapshot);
                byte[] bytes = Encoding.Unicode.GetBytes(output);
                string base64 = Convert.ToBase64String(bytes);
                return base64;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error serializing passed snapshot");
                Console.WriteLine(ex.Message);
            }
            return null;
        }
    }
}
